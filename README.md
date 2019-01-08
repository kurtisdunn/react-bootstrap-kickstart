# react-bootstrap-kickstart
Webpack, React, Bootstrap boilerplate. Contains form validation & oAuth fetch components.


### Layout
Containers are set to the my preferred Desktop & Mobile layout for Bootstrap.

Default structure
```scss
.container{
  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  max-width: 100%;
  padding: 2px;
  header{
    margin-top:0;
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  max-width: 100%;
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  max-width: 100%;
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  max-width: 1199.98px;
}

// Extra large devices (large desktops)
max-width: 1199.98px;
// No media query since the extra-large breakpoint has no upper bound on its width
}

```

### Form validation
Contains form and input validation. Generally you would wrap a POST or PUT in a form tag and add validation tag to the input. It also can be done inline if needed. *Nested forms are partially supported depending on tree structure and depth of component to be validated.

Typical form to be validated
```js
<Form method={ ContactPost }>
 <Input title={'First Name'} name={'firstName'} validator={'required'} />
 <Input title={'Last Name'} name={'lastName'} validator={'required'}/>
 <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />
 <Input title={'Address'} name={'address'} validator={'required'} />
 <Input title={'Address 2'} name={'address2'} />
 <Textarea rows={'10'} title={'Message'} name={'message'} validator={'required'} />
 <Button value={'Send!'} class={'btn-submit'} type={'submit'} />
</Form>
```

### Build it

```bash
webpack
```

### Develop it

```bash
npm run dev

```
