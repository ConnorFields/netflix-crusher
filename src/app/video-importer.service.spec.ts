import { TestBed, inject } from '@angular/core/testing';

import { VideoImporterService } from './video-importer.service';

describe('VideoImporterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoImporterService]
    });
  });

  it('should ...', inject([VideoImporterService], (service: VideoImporterService) => {
    expect(service).toBeTruthy();
  }));
});
