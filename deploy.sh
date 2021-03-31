PID=`cat ../save_pid.txt`
kill -9 $PID || true
nohup vr prod > ../my.log &
echo $! > ../save_pid.txt
echo "Deployment successful!"