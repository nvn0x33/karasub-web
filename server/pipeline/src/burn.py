import ffmpeg
from pathlib import Path

def burn_subtitle(video_path, ass_path, fontdir_path, video_out):
    video_path = Path(video_path)
    ass_path = Path(ass_path)
    fontdir_path = Path(fontdir_path)
    video_out = Path(video_out)
    print(ass_path)
    
    video_out.parent.mkdir(parents=True, exist_ok=True)
    print("Burning stylized ASS subtitle file into video...")
    
    video_stream = ffmpeg.input(str(video_path))
    audio_stream = video_stream.audio
    
    filter_q = {
        "force_style": 'CollisionCorrection=1,Alignment=2,MarginV=20',
    }
    
    try:
        vid_with_subs = video_stream.video.filter(
            "ass",
            filename=str(ass_path),
            fontsdir=str(fontdir_path),
        )
        
        (
            ffmpeg
            .output(vid_with_subs, audio_stream, str(video_out), vcodec="libx264", acodec="copy")
            .overwrite_output()
            .run(capture_stdout=True, capture_stderr=True)
            
        )
        # args = ffmpeg.output(vid_with_subs, audio_stream, video_out).overwrite_output().compile()
        # print(args)
        
        print(f"Success! Final video built at: {video_out}")
        
    except ffmpeg.Error as err:
        print("FFmpeg Error:", err.stderr.decode("utf-8"))
        
    
