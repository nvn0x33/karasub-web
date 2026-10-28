from src import Handle


if __name__ == "__main__":
    new_handle = Handle()
    vid_files = new_handle.init_UI()
    
    new_handle.append_font_data(vid_files)
    
    new_handle.parallel_process_vids()
    
    
    
# //structure 
# const SUPPORTED_FONTS = {
#   'roboto-mono': {
#     name_for_video_burn: "Roboto..."
#     file: 'path/to/RobotoMono-Regular.ttf',
#     // add any font-specific settings here
#   },
#   'inter': {
# name_for_video_burn: "Inter..."
#     file: 'path/to/Inter-Regular.ttf',
#   }
# };

# Is it fine to keep the data like this?
    