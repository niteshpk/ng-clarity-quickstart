import { Component } from '@angular/core';
import { PostService, Post } from '../../../services/post/post.service';
import { ClrConditionalModule, ClrDataModule } from '@clr/angular';
import { NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';
import { User, UserService } from '../../../services/user/user.service';
import { AlertComponent } from '../../../components/alert/alert.component';

interface PostViewModel extends Post {
  author: string;
}

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [NgIf, ClrDataModule, ClrConditionalModule, AlertComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss',
})
export class SecondPageComponent {
  articles: PostViewModel[] = [];

  constructor(
    private postervice: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    forkJoin([this.getUsers(), this.getPosts()]).subscribe(([users, posts]) => {
      this.articles = posts.map((post) => {
        const user = users.find((u) => u.id === post.id);

        return { ...post, author: user?.name ?? 'NA' };
      });
    });
  }

  getPosts() {
    return this.postervice.getPosts();
  }

  getUsers() {
    return this.userService.getUsers();
  }

  handleClose($event: boolean) {
    console.log($event);
  }
}
