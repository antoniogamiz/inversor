PID=`cat ../save_pid.txt`
kill -9 $PID || true
cp ../.env .env
nohup vr prod > ../my.log
cat ../my.log
echo $! > ../save_pid.txt
echo "Deployment successful!"