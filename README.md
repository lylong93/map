#live

ffmpeg:
ffmpeg -re -i orange.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/live/home
node:
node-media-server

closed
