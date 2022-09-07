import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from '../share/share.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PagesModule } from '../pages/pages.module';


registerLocaleData(zh);


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShareModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports:[ShareModule, AppRoutingModule]
})
export class CoreModule {
  // @SkipSelf 跳过组件自身，然后沿着 Injector Tree 向上查找
  // @Optional 如果 CoreModule 自身内部提供了对应的服务，就创建实例，否则就直接赋值为 null，不抛异常
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
    if(parentModule){
      throw new Error("CoreModule 只可以被AppModule引入一次");
    }
    
  }
 }
