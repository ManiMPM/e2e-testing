describe('Protractor Patient-list App', function() {

  beforeEach(function() {
    browser.get('index.html');
    element(by.css('[ng-click="goToEdit(data)"]')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/index.html#/edit');
  });

  it('should have a title', function() {
    browser.navigate().back();
    expect(browser.getTitle()).toEqual('Patient lists');
    expect(element(by.css('.title')).getText()).toEqual('PATIENTS LIST');
    expect(element(by.css('.title')).isPresent()).toEqual(true);
    expect(element(by.css('.editWrapper')).isPresent()).toEqual(false);
  });

  it('should redirect to home page when submitting the form', function() {
    expect(element(by.css('.title')).isPresent()).toEqual(false);
    element(by.id('save')).click();
    expect(element(by.css('.title')).isPresent()).toEqual(true);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/index.html#/home');
  });

  it('should redirect to home page when clicking on cancel', function() {
    expect(element(by.css('.editWrapper')).isPresent()).toEqual(true);
    element(by.id('cancel')).click();
    expect(element(by.css('.title')).isPresent()).toEqual(true);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/index.html#/home');
    expect(element(by.css('.editWrapper')).isPresent()).toEqual(false);
  });

  it('should have form fields with input values', function() {
    var name = element(by.model('selectedPatientData.name'));
    name.sendKeys('123');
    expect(name.getAttribute('value')).toBe('Alisa123');

    var age = element(by.model('selectedPatientData.age'));
    age.clear();
    age.sendKeys('19');
    expect(age.getAttribute('value')).toBe('19');

    var email = element(by.model('selectedPatientData.email'));
    email.clear();
    email.sendKeys('test@gmail.com');
    expect(email.getAttribute('value')).toBe('test@gmail.com');

    element(by.cssContainingText('option', 'Male')).click();
    var gender = element(by.model('selectedPatientData.gender'));
    expect(gender.getAttribute('value')).toBe('male');

    var height = element(by.model('selectedPatientData.height'));
    height.clear();
    height.sendKeys('5.8');
    expect(height.getAttribute('value')).toBe('5.8');
  });

  it('should redirect to home page when deleting the patient details', function() {
    element(by.id('delete')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/index.html#/home');
  });

  it('should have form-fields with labels', function() {
    var el = element(by.id('nameGrp')).element(by.tagName('label'));
    el.getText().then(function(text){
      expect(text).toEqual('Name');
    });
    var ageEl = element(by.id('ageGrp')).element(by.tagName('label'));
    ageEl.getText().then(function(text){
      expect(text).toEqual('Age');
    });
  });
});