from pathlib import Path
from rich import print

from . import Transcribe, UI, ASS
from . import extract, burn_subtitle, get_resolution

import os, threading

class Handle:
    default_font = "fonts/RobotoMono-Medium.ttf"
    
    input_dir = Path("input")
    output_dir = Path("output")
    temp_dir = Path("temp")
    
    videos_data = []
    config = {}
    
    def __init__(self):
        self.create_folders()
        
    def init_UI(self):
        new_ui = UI(Handle.default_font, Handle.input_dir)
        vid_files = new_ui.print_UI()
        
        new_ui.correct_config()
        Handle.config = new_ui.config
        
        return vid_files
    
    def parallel_process_vids(self):
        new_transcript = Transcribe()
        
        video_threads = []
        for index, video in enumerate(Handle.videos_data):
            process = threading.Thread(target=self.process_video, args=(video, new_transcript, index+1))
            process.start()
            video_threads.append(process)
            
        for process in video_threads:
            process.join()
            
        # self.process_video(Handle.videos_data[0], new_transcript, 1)
    
    def process_video(self, video, transcript_handler, process_id):
        # Extract audio
        print(f"[red] Video {process_id}: Extracting audio [/red]")
        audio_path = extract(video, Handle.temp_dir)
        # Clean segments and create transcript data
        print(f"[red] Video {process_id}: Transcribing [/red]")
        transcript_data = transcript_handler.convert(audio_path)
        
        # Append transcript data into video
        video["transcript"] = transcript_data
        # Initiate .ass subtitle file
        print(f"[red] Video {process_id}: Creating .ass script [/red]")
        new_script = ASS(video, Handle.config)
        # Write script and get its path
        path_to_sub = new_script.write_script()
        # Create path 
        font_folder = os.path.dirname(Handle.config["font_style"])
        vid_out = (Path(Handle.output_dir) / video["name"]).as_posix()

        # Final output with subtitle + video.
        print(f"[red] Video {process_id}: Burning subtitle [/red]")
        burn_subtitle(video["path"], path_to_sub, font_folder, vid_out)
    
    def append_font_data(self, vid_files):
        for video in vid_files:
            width, height = get_resolution(video["path"])
            
            if Handle.config["font_size"] == "auto":
                font = min(width, height) * 0.060
            else:
                font = Handle.config["font_size"]
            
            Handle.videos_data.append(
                {**video, 
                "resX": width,
                "resY": height,
                "font_size": int(font), 
                "transcript": []})
        
    def create_folders(self):
        Handle.input_dir.mkdir(parents=True, exist_ok=True)
        Handle.output_dir.mkdir(parents=True, exist_ok=True)
        Handle.temp_dir.mkdir(parents=True, exist_ok=True)
    
    