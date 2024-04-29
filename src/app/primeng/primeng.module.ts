import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { TreeSelectModule } from 'primeng/treeselect';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { ButtonGroupModule } from 'primeng/buttongroup';

const primengModules = [
  MenuModule,
  RippleModule,
  ButtonModule,
  InputTextModule,
  StyleClassModule,
  CheckboxModule,
  FileUploadModule,
  DropdownModule,
  InputSwitchModule,
  InputTextareaModule,
  CalendarModule,
  TableModule,
  CardModule,
  MultiSelectModule,
  TagModule,
  SliderModule,
  DialogModule,
  TreeSelectModule,
  CarouselModule,
  DividerModule,
  MessagesModule,
  ButtonGroupModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [...primengModules]],
  exports: [...primengModules],
})
export class PrimengModule {}
