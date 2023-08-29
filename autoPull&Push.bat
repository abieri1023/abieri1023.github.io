@echo off

set /p command="pull or push?: "

if "%command%"=="pull" (
	echo pull
	git pull
	pause>null
) else if "%command%"=="push" (
	echo push
	git add .
	git commit -m "Push Code:%date:~0,10%,%time:~0,8%"
	git push origin main
	pause>null
) else (
	echo ???
	pause>null
)

