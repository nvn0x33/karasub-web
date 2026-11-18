
jobs = {
    # job_id: {"status": "processing"}
}

def append(job_id, status):
    jobs[job_id] = {"status": status}
    
def get_jobs(max_jobs):
    job_queue = []
    
    for key, value in jobs.items():
        if len(job_queue) == max_jobs:
            break
        if value["status"] == "queue":
            job_queue.append(key)
            
    return job_queue