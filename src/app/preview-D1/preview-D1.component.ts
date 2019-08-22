import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';
import { AppCss } from '../AppCss';
import { MatSnackBar } from '@angular/material';

declare const insertD1: any;
declare const insertbg: any;
declare const insertLogo: any;
declare const insertWidth: any;
declare const insertGlobalcss: any;
declare const download: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-D1',
  templateUrl: './preview-D1.component.html',
  styleUrls: ['./preview-D1.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PreviewD1Component implements DoCheck {
  @Input() data: AppData;
  @Input() altLogo: string;
  @Input() altImg: string;
  @Input() button: string;
  @Input() device: string;
  @Input() logoWidth: number;
  @Input() txtColor: any = [];
  @Input() whiteBGLogo: boolean;
  // @Output() D1Code = new EventEmitter();
  buttonLink: string;
  D1iframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    insertGlobalcss(this.css.getGlobalCSS());

    if (this.data.bgURL === '') {
      const tmpBg = 'https://images.americanhotel.com/images/banners/D1-placeholder.jpg';
      insertbg(tmpBg, 'D1');
    } else {
      insertbg(this.data.bgURL, 'D1');
    }

    // insertbg(this.data.bgURL, 'D1');
    insertLogo(this.data.logoURL, 'D1');
    insertWidth(this.logoWidth);

    if (this.whiteBGLogo === true) {
      $('.D1-template').find('img.pb-2').addClass('bg-white-transparent');
      $('.D1-iframe').contents().find('#D1logo').addClass('bg-white-transparent');
    } else {
      $('.D1-template').find('img.pb-2').removeClass('bg-white-transparent');
      $('.D1-iframe').contents().find('#D1logo').removeClass('bg-white-transparent');
    }

    this.getHTML();
  }

  /* Snackbar for copied */
  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    // $('.resize-sensor').remove(); // this.D1Code.emit(tmp);
    let tmp: string;
    tmp = $('.D1-template').children().html();
    let tmpButtonTxt = this.data.buttonTxt;

    try {
      /* Button Type */
      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
      }

      /* If no button, comment out */
      if (this.button === 'none') {
        const str = tmp.substring(tmp.search('btn') - 10, tmp.search('/a') + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        tmpButtonTxt = '';
      }

      /* Button link path */
      if (this.data.buttonURL.startsWith('https://www.americanhotel.com') || this.data.buttonURL.startsWith('www.americanhotel.com')) {
        const url = this.data.buttonURL;
        const lst: string[] = url.split('www.americanhotel.com');
        const str = tmp.substring(tmp.search('href') + 6, tmp.search('title="') - 1);
        this.buttonLink = lst[1];
      } else {
        this.buttonLink = this.data.buttonURL;
      }

      /* Headline Color */
      if (tmp.includes('c-hero__title--')) {
        const str = tmp.substring(tmp.search('c-hero__title--'), tmp.indexOf('c-hero__title--') + 20);
        const res = tmp.replace(str, 'c-hero__title--' + this.txtColor[0].color + ' ');
        tmp = res;
      }

      /* Subline Color */
      if (tmp.includes('c-hero__sub-title--')) {
        const str = tmp.substring(tmp.search('c-hero__sub-title--'), tmp.indexOf('c-hero__sub-title--') + 24);
        const res = tmp.replace(str, 'c-hero__sub-title--' + this.txtColor[1].color + ' ');
        tmp = res;
      }

      /* if no headline, comment out */
      if (this.data.headline === '') {
        const start = tmp.indexOf('h2');
        const end = tmp.indexOf('/h2');
        const str = tmp.substring(start - 1, end + 4);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      /* if no subline, comment out */
      if (this.data.subline === '') {
        const start = tmp.indexOf('h3');
        const end = tmp.indexOf('h3>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      this.outputCode = tmp;
      // this.D1Code.emit(tmp);

      this.impexCode = tmp.replace(/"/g, '""');

      this.D1iframeCode =
      '<h2 class="c-hero__title c-hero__title--' + this.txtColor[0].color + ' c-hero__title--weight-extrabold c-hero__title--size-normal">' + this.data.headline + '</h2>' +
      '<h3 class="c-hero__sub-title c-hero__sub-title--' + this.txtColor[1].color + ' c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">' + this.data.subline + '</h3>' +
      '<a class="btn btn--' + this.button + ' c-hero__action" href="' + this.data.buttonURL + '" title="' + tmpButtonTxt + '">' + tmpButtonTxt + '</a>';

      this.D1iframeCode = this.getScript(this.D1iframeCode);
      insertD1(this.D1iframeCode);

    } catch (err) { }

  }

  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a.btn\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
  }

  /* Copy code */
  onCopy(codeType) {
    let copyCode = '';
    if (codeType === 'plain') {
      copyCode = this.outputCode;

    } else if (codeType === 'impex') {
      copyCode = $('code#impex-code').text();
    }

    let txtarea: any;
    txtarea = document.createElement('textarea');
    txtarea.style.position = 'fixed';
    txtarea.style.left = '0';
    txtarea.style.top = '0';
    txtarea.style.opacity = '0';
    txtarea.value = copyCode;
    document.body.appendChild(txtarea);
    txtarea.focus();
    txtarea.select();
    document.execCommand('copy');
    document.body.removeChild(txtarea);
  }

  onDownload(filename, type) {
    if (type === 'html') {
      download(filename, this.outputCode);
    } else if (type === 'impex') {
      const impex = $('code#impex-code').text();
      download(filename, impex);
    }
  }

}