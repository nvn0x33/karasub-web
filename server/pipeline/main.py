from src import Handle, Transcribe
from src import utils
from ..jobs import append, get_jobs
from pathlib import Path

jobs_path = Path("../jobs")

def submit():
    transcriber = Transcribe()
    [job1, job2] = get_jobs(2)
    video_files = utils.get_vid_files(self.input_dir)
    
    # new_handle = Handle()
    # vid_files = new_handle.init_UI()
    
    # new_handle.append_font_data(vid_files)
    
    # new_handle.parallel_process_vids()
    
    