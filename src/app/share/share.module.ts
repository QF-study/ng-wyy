import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    FormsModule,
    NzLayoutModule,
    NzListModule,
    NzInputModule,
    NzMenuModule
  ],
  exports:[CommonModule, NzButtonModule, FormsModule,
     NzLayoutModule, NzListModule, NzInputModule,
     NzMenuModule]
})
export class ShareModule { }
