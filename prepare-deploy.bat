@echo off
echo Cleaning deploy directory...
if exist deploy rmdir /s /q deploy

echo Creating deploy directory structure...
mkdir deploy
mkdir deploy\.next

echo Copying standalone files...
xcopy .next\standalone deploy /E /H /C /I /Y

echo Copying static assets...
xcopy .next\static deploy\.next\static /E /H /C /I /Y

echo Copying public assets...
xcopy public deploy\public /E /H /C /I /Y

echo Preparation complete.
