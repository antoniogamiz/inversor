PID=`cat save_pid.txt`
kill -9 $PID || true
rm -rf prod
mkdir -p prod
cd prod
git clone https://github.com/antoniogamiz/inversor.git .
nohup vr prod > ../my.log &
echo $! > ../save_pid.txt
echo "Deployment successful!"