@echo off
echo WOW3 애플리케이션을 시작합니다...
cd %~dp0
rimraf .next
pnpm dev 