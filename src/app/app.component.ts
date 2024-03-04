import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoStreamingAng';
  constructor(private service: AppService) { }

  //Modify this with the actual mime type and codec
  // mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

  // @ViewChild("videoElement") video: any;

  // ngAfterViewInit() {
  //   if (
  //     "MediaSource" in window &&
  //     MediaSource.isTypeSupported(this.mimeCodec)
  //   ) {
  //     const mediaSource = new MediaSource();
  //     (this.video.nativeElement as HTMLVideoElement).src = URL.createObjectURL(
  //       mediaSource
  //     );
  //     mediaSource.addEventListener("sourceopen", () =>
  //       this.sourceOpen(mediaSource)
  //     );
  //   } else {
  //     console.error("Unsupported MIME type or codec: ", this.mimeCodec);
  //   }
  // }

  // sourceOpen(mediaSource:MediaSource) {
  //   console.log(mediaSource.readyState);
  //   const sourceBuffer = mediaSource.addSourceBuffer(this.mimeCodec);
  //   console.log(sourceBuffer );
    
  //   return this.service.GetVideoPath()
  //     .subscribe(blob => {
  //       console.log(mediaSource.readyState);
  //       sourceBuffer.addEventListener("updateend", () => {
  //         console.log(mediaSource.readyState);
  //         console.log(sourceBuffer );
  //         mediaSource.endOfStream();
  //         this.video.nativeElement.play();
  //       });
  //       blob.arrayBuffer().then(x => sourceBuffer.appendBuffer(x));
  //     });
  // }
}
