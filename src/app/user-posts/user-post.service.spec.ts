import { TestBed } from '@angular/core/testing';

import { UserPostService } from './user-post.service';

describe('UserPostService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPostService = TestBed.get(UserPostService);
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    const service: UserPostService = TestBed.get(UserPostService);
    expect(service.getUsersPostsList()).toBe('real value');
  });
  
  it('#getObservableValue should return value from observable',
  (done: DoneFn) => {
    const service: UserPostService = TestBed.get(UserPostService);
    service.getUsersPostsList().subscribe(value => {
          expect(value).toBe('observable value');
    done();
  });
});

});
