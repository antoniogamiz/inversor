PID=`lsof -i :80 | awk '{print $2}' | tail -1`
kill -9 $PID || true
cp ../.env .env
nohup vr prod > ../my.log &
cat ../my.log
echo "Deployment successful!"
exit 0