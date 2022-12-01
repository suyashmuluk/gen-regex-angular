# gen-regex-angular

# Intro

<p>Generates regular expression according to passed parameters.</p>

# Installation

```bash
npm i gen-regex-angular
```

# Usage

## <p>Step 1</p>
Import module in your `app.component.ts` file

```typescript
import { GenRegexAngular } from 'gen-regex-angular';
```

## <p>Step 2</p>
After import, create instance of imported module inside constructor

```typescript
constructor(private genRegexAngular: GenRegexAngular) {}
```
## <p>Step 3</p>
Now, you are all set to use this module in your angular project.

To use the particular regex pattern for formcontrol validation. Suppose we have to validate formcontrol **"email"**. The code will look like

```typescript
email = new FormControl('', [Validators.pattern(this.genRegexAngular.regexpattern('mail'))])
```

above code is similar to

```typescript
email = new FormControl('', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$')])
```

# Supported Parameters

You can find the parameters to use in function in below table.

| Parameter     | Usage       | Output |
| ------------- |-------------| ------------|
| mail      | regexpattern('mail') | **^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$**
| pan      | regexpattern('pan')      | **^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$**
| aadhar      | regexpattern('aadhar')      | **^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$**
| gst | regexpattern('gst')      | **^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$**

Currently, We focussed on these 4 primary patterns which are widely used in **India**. We are working on improving this module.
