rm -rf prod
mkdir -p prod
git clone https://github.com/antoniogamiz/inversor.git .
cd prod
PID=`cat ../save_pid.txt`
kill -9 $PID || true
nohup vr prod > ../my.log &
echo $! > ../save_pid.txt
echo "Deployment successful!"