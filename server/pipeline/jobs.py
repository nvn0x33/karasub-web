jobs = {
    # job_id: {"status": "processing"}
}

def append(job_id, status):
    jobs[job_id] = {"status": status}
    
def get_jobs(job_no):
    queue_jobs = []
    for key, value in jobs:
        if queue_jobs.length == job_no:
            break
        if value["status"] == "queue":
            queue_jobs.push(key)
            
    return queue_jobs