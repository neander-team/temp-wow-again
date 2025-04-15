import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { AnalysisReport, getAnalysisResult, getFragranceById, ScaleScores } from '@/services/imageAnalysisService';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getScaleDescription } from '@/utils/fragranceTypesI18n';

interface ScaleEmoji {
  start: string;
  end: string;
}

interface ScaleDescription {
  low: string;
  high: string;
}

interface PerfumeAnalysisReportProps {
  locale?: string;
}

// RadarData 타입 정의
interface RadarData {
  subject: string;
  score: number;
  fullMark: number;
}

const PerfumeAnalysisReport = ({ locale = 'ko' }: PerfumeAnalysisReportProps) => {
  // 토글 상태 관리
  const [showNotes, setShowNotes] = useState(false);
  const [showStyle, setShowStyle] = useState(false);
  const [showSceneDescription, setShowSceneDescription] = useState(false);
  const [translations, setTranslations] = useState<any>({});
  const [initialized, setInitialized] = useState(false);
  const [analysisReport, setAnalysisReport] = useState<AnalysisReport | null>(null);
  const [loading, setLoading] = useState(true);
  
  // 분석 결과 가져오기
  useEffect(() => {
    const fetchAnalysisResult = async () => {
      try {
        setLoading(true);
        const result = await getAnalysisResult();
        setAnalysisReport(result);
      } catch (error) {
        console.error('분석 결과 가져오기 오류:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAnalysisResult();
  }, [locale]); // 언어가 변경될 때마다 다시 가져오기
  
  // useTranslation 훅을 직접 사용하지 않고 수동으로 번역 로드
  // 번역 데이터를 직접 로드
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        let translationData;
        if (locale === 'en') {
          translationData = await import('@/locales/en/common/result.json');
        } else if (locale === 'zh') {
          translationData = await import('@/locales/zh/common/result.json');
        } else if (locale === 'ja') {
          translationData = await import('@/locales/ja/common/result.json');
        } else {
          translationData = await import('@/locales/ko/common/result.json');
        }
        
        setTranslations(translationData.default || translationData);
        setInitialized(true);
      } catch (error) {
        console.error('번역 로드 실패:', error);
        // 기본값으로 한국어 사용
        const koTranslation = await import('@/locales/ko/common/result.json');
        setTranslations(koTranslation.default || koTranslation);
        setInitialized(true);
      }
    };
    
    loadTranslations();
  }, [locale]);
  
  // 번역 함수
  const t = (key: string, options?: any) => {
    if (!initialized) return ''; // 번역이 로드되지 않았을 때 빈 문자열 반환
    
    const keyParts = key.replace('common:result.', '').split('.');
    let value = translations;
    
    for (const part of keyParts) {
      if (value && value[part] !== undefined) {
        value = value[part];
      } else {
        return key; // 키를 찾을 수 없으면 키 자체를 반환
      }
    }
    
    // 옵션이 있는 경우 변수 대체
    if (typeof value === 'string' && options) {
      let result = value;
      Object.keys(options).forEach(optionKey => {
        result = result.replace(`{{${optionKey}}}`, options[optionKey]);
      });
      return result;
    }
    
    return value;
  };
  
  // 로딩 중이거나 분석 결과가 없는 경우 처리
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!analysisReport) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p>{initialized ? t('common:result.noResult') : '분석 결과를 찾을 수 없습니다. 다시 분석해주세요.'}</p>
      </div>
    );
  }
  
  // 번역된 향수 정보 가져오기 (있을 경우)
  const localizedFragrance = analysisReport.recommendation.id 
    ? getFragranceById(analysisReport.recommendation.id, locale)
    : null;
  
  // 현지화된 추천 정보
  const recommendation = localizedFragrance || analysisReport.recommendation;
  
  // 실제 scaleScores 객체의 키와 값 출력
  console.log('원본 척도 점수 객체:', JSON.stringify(analysisReport.analysisResult.scaleScores));
  console.log('scaleScores 객체의 키:', Object.keys(analysisReport.analysisResult.scaleScores));

  // 직접 값을 가져오도록 수정
  const scaleData = [
    { 
      name: '뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기', 
      value: analysisReport.analysisResult.scaleScores['뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기'] || 
             analysisReport.analysisResult.scaleScores['큐티_섹시'] || 
             Math.floor(Math.random() * 10) + 1, // 테스트용 랜덤 값
      fullMark: 10 
    },
    { 
      name: '편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세', 
      value: analysisReport.analysisResult.scaleScores['편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세'] || 
             analysisReport.analysisResult.scaleScores['소꿉친구_재벌3세'] || 
             Math.floor(Math.random() * 10) + 1,
      fullMark: 10 
    },
    { 
      name: '너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재', 
      value: analysisReport.analysisResult.scaleScores['너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재'] || 
             analysisReport.analysisResult.scaleScores['공부벌레_체육특기생'] || 
             Math.floor(Math.random() * 10) + 1,
      fullMark: 10 
    },
    { 
      name: '표정 없는 차가운 미스터리_국민 옆집 친구 포근함', 
      value: analysisReport.analysisResult.scaleScores['표정 없는 차가운 미스터리_국민 옆집 친구 포근함'] || 
             analysisReport.analysisResult.scaleScores['차도남_훈훈남'] || 
             Math.floor(Math.random() * 10) + 1,
      fullMark: 10 
    },
    { 
      name: '햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기', 
      value: analysisReport.analysisResult.scaleScores['햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기'] || 
             analysisReport.analysisResult.scaleScores['빛의수호자_다크나이트'] || 
             Math.floor(Math.random() * 10) + 1,
      fullMark: 10 
    },
  ];

  // 수정된 데이터 출력
  console.log('수정된 그래프 데이터:', scaleData.map(item => `${item.name}: ${item.value}`));
  
  // 시각적 척도 설명 - 빈 문자열로 텍스트가 표시되지 않도록 함
  const scaleDescriptions: Record<string, ScaleDescription> = {
    '뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기': { low: '', high: '' },
    '편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세': { low: '', high: '' },
    '너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재': { low: '', high: '' },
    '표정 없는 차가운 미스터리_국민 옆집 친구 포근함': { low: '', high: '' },
    '햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기': { low: '', high: '' }
  };
  
  // 추천된 향수의 척도 점수 - 새로운 키 이름 사용
  const perfumeScales = recommendation.visualScales || {
    '뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기': 5,
    '편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세': 5,
    '너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재': 5,
    '표정 없는 차가운 미스터리_국민 옆집 친구 포근함': 5,
    '햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기': 5
  };
  
  // 레이더 차트 데이터 준비
  const prepareRadarData = (scaleScores: ScaleScores | undefined): RadarData[] => {
    if (!scaleScores) return [];
    
    const result: RadarData[] = [];
    
    Object.entries(scaleScores).forEach(([key, value]) => {
      // 번역된 이름 사용
      const translatedKey = getScaleDescription(key, locale).title;
      result.push({
        subject: translatedKey,
        score: Number(value) * 10, // 0-10 스케일을 0-100으로 변환
        fullMark: 100,
      });
    });
    
    return result;
  };
  
  // 향수 노트 정보
  const perfumeNotes = analysisReport.notesDescription || [];

  // 스케일 이름 이모지 매핑
  const scaleEmojis: Record<string, ScaleEmoji> = {
    '뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기': { start: '🧸', end: '🔥' },
    '편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세': { start: '🏠', end: '💎' },
    '너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재': { start: '📝', end: '🏀' },
    '표정 없는 차가운 미스터리_국민 옆집 친구 포근함': { start: '🧊', end: '🧸' },
    '햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기': { start: '☀️', end: '🌙' }
  };

  // 스케일 이름 포맷팅 - 이모지 제거하고 "_" 대신 "VS" 사용
  const formatScaleName = (name: string): string => {
    // "_" 대신 "VS"로 대체
    const parts = name.split('_');
    if (parts.length === 2) {
      return `${parts[0]} VS ${parts[1]}`;
    }
    return name;
  };

  // 향수 스타일 키워드
  const styleKeywords = recommendation.styleKeywords || [];
  
  // 척도 설명 가져오기
  const getScaleExplanation = (scaleName: string) => {
    if (analysisReport.analysisResult.scaleExplanations && 
        analysisReport.analysisResult.scaleExplanations[scaleName]) {
      return analysisReport.analysisResult.scaleExplanations[scaleName];
    }
    return null;
  };
  
  // 향수 코드 정확히 가져오기
  const getPerfumeCode = () => {
    if (analysisReport.fragranceCode) {
      return analysisReport.fragranceCode;
    }
    
    if (recommendation.id) {
      // ACSCENT01 형식을 AC'SCENT 01 형식으로 변환
      return `AC'SCENT ${recommendation.id.replace(/[^\d]/g, '')}`;
    }
    
    return '';
  };

  // 로딩 중이면 로딩 표시
  if (!initialized) {
    return (
      <div className="w-[390px] h-[300px] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="perfume-analysis" style={{ 
      maxWidth: '390px', 
      margin: '0 auto', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <h1 style={{ 
          fontSize: '22px', 
          color: '#333',
          margin: '0 0 15px 0'
        }}>🌟 {t('common:result.analysis_title')}</h1>
        
        <div style={{ 
          display: 'inline-block',
          width: '120px',
          height: '120px',
          borderRadius: '60px',
          overflow: 'hidden',
          border: '3px solid #8a63d2',
          marginBottom: '15px'
        }}>
          <img 
            src={analysisReport.originalImage} 
            alt="분석된 이미지" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </div>
      
      {/* 이미지 분석 결과 */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '15px', 
        marginBottom: '20px' 
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#8a63d2', fontSize: '16px' }}>📸 {t('common:result.image_analysis_result')}</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', margin: '0' }}>
          {analysisReport.analysisResult.description || analysisReport.analysisResult.overallImpression}
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px', 
          marginTop: '10px' 
        }}>
          {analysisReport.analysisResult.keywords.map((keyword, index) => (
            <span key={index} style={{ 
              padding: '5px 10px', 
              backgroundColor: '#f0e9ff', 
              borderRadius: '15px', 
              fontSize: '12px', 
              color: '#6a4cad' 
            }}>
              #{keyword}
            </span>
          ))}
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: '#8a63d2', 
        color: 'white', 
        padding: '12px', 
        borderRadius: '12px', 
        textAlign: 'center',
        marginBottom: '5px',
        fontWeight: 'bold',
        fontSize: '18px',
        wordBreak: 'break-word' // 긴 텍스트 처리
      }}>
        {recommendation.emoji} {recommendation.name}
      </div>
      
      {/* 향수 코드 추가 */}
      <div style={{ 
        backgroundColor: '#9b83d2', 
        color: 'white', 
        padding: '8px', 
        borderRadius: '8px', 
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '16px',
        letterSpacing: '1px'
      }}>
        {getPerfumeCode()}
      </div>
      
      {/* 이미지 분석 척도 */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '15px', 
        marginBottom: '20px', 
        position: 'relative'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#8a63d2', fontSize: '16px' }}>📊 {t('common:result.image_analysis_scale')}</h3>
        
        {scaleData.map((item) => (
          <div key={item.name} style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '11px',
                color: '#333',
                fontWeight: 'bold',
                textAlign: 'left',
                flexBasis: '45%'
              }}>
                {formatScaleName(item.name).split(' VS ')[0]}
              </div>
              <div style={{ 
                fontSize: '11px',
                color: '#666',
                margin: '0 5px'
              }}>
                VS
              </div>
              <div style={{ 
                fontSize: '10px',
                color: '#333',
                fontWeight: 'bold',
                textAlign: 'right',
                flexBasis: '45%'
              }}>
                {formatScaleName(item.name).split(' VS ')[1]}
              </div>
            </div>
            <div style={{ position: 'relative', marginBottom: '15px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '3px'
              }}>
                <span style={{ fontSize: '9px', color: '#666' }}>0</span>
                <span style={{ fontSize: '9px', color: '#666' }}>10</span>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '4px', position: 'relative' }}>
                <div style={{ 
                  width: `${Math.max(1, item.value) * 10}%`, // 최소 1%는 표시
                  height: '100%', 
                  backgroundColor: '#8a63d2', 
                  borderRadius: '4px',
                  position: 'relative',
                  transition: 'width 0.3s'
                }}>
                  <div style={{
                    position: 'absolute',
                    right: '-5px',
                    top: '-18px',
                    backgroundColor: '#8a63d2',
                    color: 'white',
                    fontSize: '9px',
                    padding: '2px 4px',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '10px', 
              color: '#999', 
              marginTop: '2px',
              flexWrap: 'wrap' // 긴 텍스트 처리
            }}>
              <span style={{ maxWidth: '48%', wordBreak: 'break-word' }}>{scaleDescriptions[item.name].low}</span>
              <span style={{ maxWidth: '48%', wordBreak: 'break-word', textAlign: 'right' }}>{scaleDescriptions[item.name].high}</span>
            </div>
            {getScaleExplanation(item.name) && (
              <div style={{ marginTop: '5px', padding: '8px', backgroundColor: '#f9f4ff', borderRadius: '6px', fontSize: '12px', color: '#666' }}>
                {getScaleExplanation(item.name)}
              </div>
            )}
          </div>
        ))}
        
        {/* 레이더 차트 */}
        <div style={{ height: '270px', marginTop: '20px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>🎯 {t('common:result.similarity_comparison')}</h4>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="65%" data={prepareRadarData(analysisReport.analysisResult.scaleScores)}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 9 }} /> {/* 폰트 크기 조정 */}
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar
                name={t('common:result.image_analysis_value')}
                dataKey="score"
                stroke="#8a63d2"
                fill="#8a63d2"
                fillOpacity={0.5}
                strokeWidth={2}
              />
              <Radar
                name={`${recommendation.name} ${t('common:result.fragrance_characteristics')}`}
                dataKey="score"
                stroke="#4caf50"
                fill="#4caf50"
                fillOpacity={0.4}
                strokeWidth={2}
              />
              <Legend 
                align="center" 
                verticalAlign="bottom" 
                height={36} 
                iconSize={10}
                wrapperStyle={{ fontSize: '11px' }} // 폰트 크기 조정
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* 향수 타입 설명 */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '15px', 
        marginBottom: '20px' 
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#8a63d2', fontSize: '16px' }}>🔍 {t('common:result.fragrance_type_analysis')}</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', margin: '0' }}>
          {recommendation.description}
        </p>
      </div>
      
      {/* 향 노트 분석 (토글) */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '15px', 
        marginBottom: '20px' 
      }}>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            cursor: 'pointer' 
          }}
          onClick={() => setShowNotes(!showNotes)}
        >
          <h3 style={{ margin: '0', color: '#8a63d2', fontSize: '16px' }}>🧪 {t('common:result.fragrance_note_analysis')}</h3>
          <span style={{ color: '#8a63d2', fontWeight: 'bold' }}>{showNotes ? '▲' : '▼'}</span>
        </div>
        
        {showNotes && (
          <div style={{ 
            marginTop: '15px', 
            borderTop: '1px solid #eee', 
            paddingTop: '15px' 
          }}>
            {perfumeNotes.length > 0 ? (
              perfumeNotes.map((note, index) => (
                <div key={index} style={{ 
                  marginBottom: index < perfumeNotes.length - 1 ? '20px' : '0',
                  backgroundColor: '#f9f4ff',
                  padding: '12px',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '8px' 
                  }}>
                    <span style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '10px', 
                      backgroundColor: '#8a63d2', 
                      color: 'white', 
                      fontSize: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginRight: '8px' 
                    }}>
                      {index + 1}
                    </span>
                    <h4 style={{ 
                      margin: '0', 
                      fontSize: '15px', 
                      color: '#6a4cad', 
                      fontWeight: 'bold',
                      wordBreak: 'break-word' // 긴 텍스트 처리
                    }}>
                      {note.name}
                    </h4>
                  </div>
                  <p style={{ 
                    fontSize: '13px', 
                    lineHeight: '1.6', 
                    color: '#555', 
                    margin: '0',
                    paddingLeft: '28px',
                    wordBreak: 'break-word' // 긴 텍스트 처리
                  }}>
                    {note.description}
                  </p>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', color: '#999', fontSize: '14px', padding: '20px 0' }}>
                {recommendation.notes.map((note, index) => (
                  <span key={index} style={{ 
                    display: 'inline-block', 
                    margin: '4px 8px', 
                    padding: '5px 12px', 
                    backgroundColor: '#f0e9ff', 
                    borderRadius: '15px', 
                    color: '#6a4cad',
                    wordBreak: 'break-word' // 긴 텍스트 처리
                  }}>
                    {note}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* 이미지 시각화 (토글) */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '15px', 
        marginBottom: '20px' 
      }}>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            cursor: 'pointer' 
          }}
          onClick={() => setShowSceneDescription(!showSceneDescription)}
        >
          <h3 style={{ margin: '0', color: '#8a63d2', fontSize: '16px' }}>💫 {t('common:result.image_visualization')}</h3>
          <span style={{ color: '#8a63d2', fontWeight: 'bold' }}>{showSceneDescription ? '▲' : '▼'}</span>
        </div>
        
        {showSceneDescription && (
          <div style={{ 
            marginTop: '15px', 
            borderTop: '1px solid #eee', 
            paddingTop: '15px' 
          }}>
            <div style={{
              backgroundColor: '#f9f4ff',
              padding: '15px',
              borderRadius: '8px',
              borderLeft: '4px solid #8a63d2'
            }}>
              <p style={{ 
                fontSize: '14px', 
                lineHeight: '1.7', 
                color: '#333', 
                margin: '0',
                fontStyle: 'italic',
                wordBreak: 'break-word' // 긴 텍스트 처리
              }}>
                {analysisReport.visualScene}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* 스타일 제안 (토글) */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '15px', 
        marginBottom: '10px' 
      }}>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            cursor: 'pointer' 
          }}
          onClick={() => setShowStyle(!showStyle)}
        >
          <h3 style={{ margin: '0', color: '#8a63d2', fontSize: '16px' }}>👔 {t('common:result.style_suggestion')}</h3>
          <span style={{ color: '#8a63d2', fontWeight: 'bold' }}>{showStyle ? '▲' : '▼'}</span>
        </div>
        
        {showStyle && (
          <div style={{ 
            marginTop: '15px', 
            borderTop: '1px solid #eee', 
            paddingTop: '15px' 
          }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              marginBottom: '15px' 
            }}>
              {styleKeywords.map((keyword, index) => (
                <span key={index} style={{ 
                  padding: '5px 10px', 
                  backgroundColor: '#f0e9ff', 
                  borderRadius: '15px', 
                  fontSize: '12px', 
                  color: '#6a4cad',
                  wordBreak: 'break-word' // 긴 텍스트 처리
                }}>
                  #{keyword}
                </span>
              ))}
            </div>
            <p style={{ 
              fontSize: '13px', 
              lineHeight: '1.6', 
              color: '#555', 
              margin: '0',
              wordBreak: 'break-word' // 긴 텍스트 처리
            }}>
              {analysisReport.styleRecommendation || 
                t('common:result.style_recommendation', { 
                  keywords: styleKeywords.join(', '), 
                  scenarios: recommendation.recommendedScenarios.join(', ') 
                })
              }
            </p>
          </div>
        )}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#999' }}>
        {t('common:result.copyright')}
      </div>
    </div>
  );
};

export default PerfumeAnalysisReport; 