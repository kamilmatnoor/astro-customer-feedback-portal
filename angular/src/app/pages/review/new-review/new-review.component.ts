import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReviewService } from 'src/app/services/review/review.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {

  reviewForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      email: '',
      title: '',
      technical: '',
      user: '',
      management_related: '',
      competitor_related: '',
      pricing_issue: '',
      customer_case_issue: ''
    });
  }

  onSubmit(): void {
    this.reviewService.addNew({
      data: this.reviewForm.value
    }).then((res: any) => {
      console.log(res)
      this.router.navigate(['/review'], { queryParams: { a: 'y' }, queryParamsHandling: 'merge' });
    }, (err) => {
      // this.repos = []
    })
    console.log(this.reviewForm.value)
  }

  goToList(): void {

  }

  // convenience getter for easy access to form fields
  get f() { return this.reviewForm.controls; }

}