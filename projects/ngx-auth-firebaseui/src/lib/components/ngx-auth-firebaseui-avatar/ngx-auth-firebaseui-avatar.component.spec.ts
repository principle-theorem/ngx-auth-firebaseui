import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {NgxAuthFirebaseuiAvatarComponent} from './ngx-auth-firebaseui-avatar.component';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthStub} from '../../tests/helper';
import {RouterTestingModule} from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('NgxAuthFirebaseuiAvatarComponent', () => {
  let component: NgxAuthFirebaseuiAvatarComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseuiAvatarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAuthFirebaseuiAvatarComponent],
      imports: [
        AngularFireModule,
        RouterTestingModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatIconModule
      ],
      providers: [
        {provide: AngularFireAuth, useValue: AngularFireAuthStub},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(NgxAuthFirebaseuiAvatarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
