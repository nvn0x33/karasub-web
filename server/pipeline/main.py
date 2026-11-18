from .src import Handle, Transcribe, utils
from .jobs import append, get_jobs
from pathlib import Path
import time

jobs_dir = Path("./jobs")

def submit():
    BATCH_SIZE = 2
    while True:
        job_queue = get_jobs(BATCH_SIZE)
        
        if job_queue.length < 1:
            continue
        
        job_paths = []
        for job_id in job_queue:
            append(job_id, "processing")
            job_paths.append(jobs_dir / job_id)
        
        # transcriber = Transcribe()
        # modify the utils.get_vid_files to accept an array of path and loop through it to find three things: [vid, config and font_file]
        video_files = utils.get_vid_files(job_paths)
        
        # new_handle = Handle()
        # vid_files = new_handle.init_UI()
        
        # new_handle.append_font_data(vid_files)
        
        # new_handle.parallel_process_vids()
    
