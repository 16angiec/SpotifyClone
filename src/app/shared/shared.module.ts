import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';

@NgModule({
  declarations: [
    CardPlayerComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    SideBarComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardPlayerComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    SideBarComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
  ],
})
export class SharedModule {}
