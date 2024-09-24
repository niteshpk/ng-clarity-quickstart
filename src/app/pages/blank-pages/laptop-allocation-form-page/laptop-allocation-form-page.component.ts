import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-laptop-allocation-form-page',
  standalone: true,
  imports: [
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgFor,
  ],
  templateUrl: './laptop-allocation-form-page.component.html',
  styleUrl: './laptop-allocation-form-page.component.scss',
})
export class LaptopAllocationFormPageComponent {
  @ViewChild('pdfContent') pdfContent!: ElementRef;
  assetForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.assetForm = this.fb.group({
      candidateName: ['', Validators.required],
      companyName: ['', Validators.required],
      dateOfIssue: ['', Validators.required],
      assetName: ['', Validators.required],
      asset: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required],
      otherAssets: this.fb.array([this.createOtherAsset()]),
    });
  }

  generatePDF(): void {
    html2canvas(this.pdfContent.nativeElement).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // Creates PDF in portrait mode
      let width = pdf.internal.pageSize.getWidth();
      let height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('download.pdf');
    });
  }

  get otherAssets(): FormArray {
    return this.assetForm.get('otherAssets') as FormArray;
  }

  createOtherAsset(): FormGroup {
    return this.fb.group({
      assetName: ['', Validators.required],
      asset: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required],
    });
  }

  addOtherAsset(): void {
    this.otherAssets.push(this.createOtherAsset());
  }

  onSubmit(): void {
    console.log(this.assetForm.value);
  }

  patchFormData() {
    this.assetForm.patchValue({
      candidateName: 'Nitesh Kesarkar',
      companyName: 'CodeBlaze',
      dateOfIssue: '2024-09-24',
      assetName: 'CDBLZ-NB-008',
      asset: 'Laptop',
      make: 'Lenovo',
      model: 'Yoga Pro 7 Slim',
      serialNumber: 'PF3XZ8J0',
      otherAssets: [
        {
          assetName: 'HP5',
          asset: 'Headphone',
          make: 'Poly',
          model: 'Poly V4320-M USB-A',
          serialNumber: 'FJBP0M',
        },
      ],
    });
    this.assetForm.updateValueAndValidity();
  }
}
