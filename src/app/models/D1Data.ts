export class D1Data {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
        ['DE:One-Third Banner']: string;
        ['DE:Image - 450 x 350']: string;
        ['DE:Headline']: string;
        ['DE:CTA Text']: string;
        ['DE:CTA URL']: string;
        ['DE:CTA Button Required?']: string;
    };
  };

    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:One-Third Banner']: 'One-Third Banner',
          ['DE:Image - 450 x 350']: '',
          ['DE:Headline']: '',
          ['DE:CTA Text']: '',
          ['DE:CTA URL']: '',
          ['DE:CTA Button Required?']: 'Yes'
        }
      };
    }

}
