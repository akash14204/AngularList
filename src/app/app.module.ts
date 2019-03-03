import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { HighlightDirective } from './highlight.directive';
import { DemoCardContentComponent } from './demo-card-content/demo-card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginationComponent,
    HighlightDirective,
    DemoCardContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TruncatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
