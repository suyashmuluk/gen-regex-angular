# gen-regex

# Intro

<p>Generates regular expression according to passed parameters.</p>

# Installation

```bash
npm i gen-regex-angular
```

# Usage

## <p>Step 1</p>
Import package in your node js project

```javascript
const regex = require('gen-regex');
```

## <p>Step 2</p>
After import, use the created instance throughout your project by passing the parameters for which you have to create the regex pattern

```javascript
const pattern = regex('mail');
```
or

```javascript
const pattern = regex('pan');
```

# Supported Parameters

You can find the parameters to use in function in below table.

| Parameter     | Usage       | Output |
| ------------- |-------------| ------------|
| mail      | regex('mail') | **^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$**
| pan      | regex('pan')      | **^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$**
| aadhar      | regex('aadhar')      | **^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$**
| gst | regex('gst')      | **^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$**

Currently, We focussed on these 4 primary patterns which are widely use in **India**. And we are working on improving this module.
