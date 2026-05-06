import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../models/menu-item.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './menu-management.html',
  styleUrl: './menu-management.scss'
})
export class MenuManagementComponent {
  menuService = inject(MenuService);
  private fb = inject(FormBuilder);

  menuForm: FormGroup;
  isEditing = false;
  editingId: string | null = null;

  constructor() {
    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['Main Course', Validators.required],
      image: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop', Validators.required],
      isVeg: [false]
    });
  }

  onSubmit() {
    if (this.menuForm.valid) {
      if (this.isEditing && this.editingId) {
        this.menuService.updateMenuItem({ ...this.menuForm.value, id: this.editingId });
        this.isEditing = false;
        this.editingId = null;
      } else {
        const newItem: MenuItem = {
          ...this.menuForm.value,
          id: Math.random().toString(36).substring(2, 9)
        };
        this.menuService.addMenuItem(newItem);
      }
      this.menuForm.reset({ category: 'Main Course', isVeg: false, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop' });
    }
  }

  editItem(item: MenuItem) {
    this.isEditing = true;
    this.editingId = item.id;
    this.menuForm.patchValue(item);
  }

  deleteItem(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.menuService.deleteMenuItem(id);
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingId = null;
    this.menuForm.reset({ category: 'Main Course', isVeg: false });
  }
}
