import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';
// import { ReviewRes } from 'src/app/shared/review_res';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  review: any = []
  isAdmin: boolean = false
  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.reviewService.getAll().then((res) => {
        console.log(res)
      }, (err) => {
        this.review = []
      })
    });
  }

  onEnterPressed(e) {
    this.reviewService.getAll().then((res) => {
      console.log(res)
    }, (err) => {
      this.review = []
    })
  }

  goToAdminSession() {
    this.router.navigate(['/review'], { queryParams: { a: 'y' }, queryParamsHandling: 'merge' });
  }

  reset() {
    this.reviewService.getAll().then((res) => {
      console.log(res)
    }, (err) => {
      this.review = []
    })
  }
}
