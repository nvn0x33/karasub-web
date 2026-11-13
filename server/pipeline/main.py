from .src import Handle, Transcribe, utils
from .jobs import append, get_jobs
from pathlib import Path
import time

jobs_path = Path("../jobs")

def submit():
    while True:
        job_array = get_jobs(2)
        if job_array == None:
            continue
        
        append(job_array[0], "processing")
        append(job_array[1], "processing")
        
        transcriber = Transcribe()
        # video_files = utils.get_vid_files(self.input_dir)
        
        # new_handle = Handle()
        # vid_files = new_handle.init_UI()
        
        # new_handle.append_font_data(vid_files)
        
        # new_handle.parallel_process_vids()
    
