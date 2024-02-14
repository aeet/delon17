import { Directionality } from '@angular/cdk/bidi';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { createTestContext } from '@yelon/testing';
import { YelonLocaleModule, YelonLocaleService, en_US } from '@yelon/theme';

import { ExceptionComponent, ExceptionType } from './exception.component';
import { ExceptionModule } from './exception.module';

describe('abc: exception', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExceptionModule, YelonLocaleModule, RouterTestingModule],
      declarations: [TestComponent]
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  [403, 404, 500].forEach(type => {
    it(`#type=${type}`, () => {
      context.type = type as ExceptionType;
      fixture.detectChanges();
      expect((dl.query(By.css('.exception__cont-title')).nativeElement as HTMLElement).innerText).toBe(`${type}`);
    });
  });

  it('should be custom actions', () => {
    expect(dl.queryAll(By.css('#action-edit')).length).toBe(1);
  });

  it('should be custom img&title&desc', () => {
    context.img =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    context.title = 'custom title';
    context.desc = 'custom desc';
    fixture.detectChanges();
    expect((dl.query(By.css('.exception__img')).nativeElement as HTMLElement).style.backgroundImage).toContain(
      context.img
    );
    expect((dl.query(By.css('.exception__cont-title')).nativeElement as HTMLElement).innerText).toBe(context.title);
    expect((dl.query(By.css('.exception__cont-desc')).nativeElement as HTMLElement).innerText).toBe(context.desc);
  });

  it('#i18n', () => {
    TestBed.inject<YelonLocaleService>(YelonLocaleService).setLocale(en_US);
    context.type = 403;
    fixture.detectChanges();
    expect((dl.query(By.css('.exception__cont-desc')).nativeElement as HTMLElement).innerText).toBe(
      en_US.exception['403']
    );
  });

  it('#rtl', () => {
    expect(dl.query(By.css('.exception-rtl'))).toBeNull();
    const srv = TestBed.inject(Directionality);
    srv.change.emit('rtl');
    fixture.detectChanges();
    expect(dl.query(By.css('.exception-rtl'))).not.toBeNull();
  });
});

@Component({
  template: `
    <exception #comp [type]="type" [img]="img" [title]="title" [desc]="desc" backRouterLink="/">
      <button id="btn">查看详情</button>
      <div id="action-edit">action-edit</div>
    </exception>
  `
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp!: ExceptionComponent;
  type?: 403 | 404 | 500;
  img?: string;
  title?: string;
  desc?: string;
}
