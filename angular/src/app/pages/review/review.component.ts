import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  review: any = []
  isAdmin: boolean = false

  searchForm: FormGroup;

  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setupContent()

    this.searchForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  setupContent() {
    this.reviewService.getAll().then((res) => {
      this.review = res.data
    }, (err) => {
      this.review = []
    })
  }

  onSubmit() {
    let email = this.searchForm.value.email
    if (email) {
      this.reviewService.getReviewByEmail({
        email: this.searchForm.value.email
      }).then((res) => {
        this.review = res.data
      }, (err) => {
        this.review = []
      })
    }
  }

  reset() {
    this.searchForm.reset()
    this.setupContent()
  }

  addNewReview() {
    this.router.navigate(['/new-review'], { queryParams: {}, queryParamsHandling: 'merge' });
  }

  addLike(id, total_like, total_dislike) {
    this.reviewService.updateRating({
      id,
      total_like: total_like + 1,
      total_dislike
    }).then((res) => {
      Swal.fire({
        title: 'Congratulations',
        text: "Record(s) was added successfully",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Close'
      }).then((result) => {
        if (result.value) {
          this.setupContent()
        }
      })
    }, (err) => {
      this.review = []
    })
  }

  addDislike(id, total_like, total_dislike) {
    this.reviewService.updateRating({
      id,
      total_like,
      total_dislike: total_dislike + 1
    }).then((res) => {
      Swal.fire({
        title: 'Congratulations',
        text: "Record(s) was added successfully",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Close'
      }).then((result) => {
        if (result.value) {
          this.setupContent()
        }
      })
    }, (err) => {
      this.review = []
    })
  }
}
