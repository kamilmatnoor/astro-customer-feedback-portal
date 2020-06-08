import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review/review.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {

  reviewForm: FormGroup;
  isSubmitted = false;

  review_types: any = []

  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewService.getReviewTypes().then((res) => {
      this.review_types = res.data
    }, (err) => {
      this.review_types = []
    })

    /*########### Form ###########*/
    this.reviewForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      title: ['', [Validators.required]],
      review_type: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  onSubmit(): any {
    this.isSubmitted = true;
    if (!this.reviewForm.valid) {
      return false;
    } else {
      this.reviewService.addNew({
        data: this.reviewForm.value
      }).then((res: any) => {
        Swal.fire({
          title: 'Congratulations',
          text: "Record(s) was added successfully",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Close'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/review'], { queryParams: { a: 'y' }, queryParamsHandling: 'merge' });
          }
        })
      }, (err) => {
        // todo: err handler
      })
    }

  }

  goToReview(): void {
    this.router.navigate(['/review'], { queryParams: {}, queryParamsHandling: 'merge' });
  }

  // convenience getter for easy access to form fields
  get f() { return this.reviewForm.controls; }

  changeReview(e) {
    this.review_type.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get review_type() {
    return this.reviewForm.get('review_type');
  }

}