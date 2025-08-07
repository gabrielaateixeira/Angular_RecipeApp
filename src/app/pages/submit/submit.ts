import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './submit.html',
  styleUrls: ['./submit.css']
})
export class Submit {
  recipeForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      image: [null]
    });
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.recipeForm.patchValue({ image: file });
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.recipeForm.markAllAsTouched();

    if (!this.recipeForm.valid) {
      this.errorMessage = '⚠️ Please fill out all required fields.';
      return;
    }

    this.recipeService.addCustomRecipe({
      name: this.recipeForm.get('name')?.value,
      imagePreview: this.imagePreview
    });

    alert('Recipe submitted successfully!');
    this.recipeForm.reset();
    this.imagePreview = null;
    this.errorMessage = '';
  }
}
