import { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, User, Lock, CheckCircle } from "lucide-react";
import "./RegistrationForm.css";

const RegistrationServic = () => {
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  mobileno: '',
  memberType: '',
  shopname: '',
  officeaddress: '',
  pan: '',
  gst: '',
  youraddress: '',
  city: '',
  pincode: '',
  state: '',
  district: '',
  service: '',
});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('firstName', formData.firstName);
      form.append('lastname', formData.lastname);
      form.append('email', formData.email);
      form.append('mobileno', formData.mobileno);
      form.append('memberType', formData.memberType);
      form.append('shopname', formData.shopname);
      form.append('officeaddress', formData.officeaddress);
      form.append('pan', formData.pan);
      form.append('gst', formData.gst);
      form.append('youraddress', formData.youraddress);
      form.append('city', formData.city);
      form.append('pincode', formData.pincode);
      form.append('state', formData.state);
      form.append('district', formData.district);
      form.append('service', formData.service);

       const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxeD7DuN1C2MPPoGxSjs20th5ONgsgukCHOYg3Hig74cVrHqFe9XDsst7LsjeBmaaA/exec',
        {
          method: 'POST',
          body: form,
        }
      );

      const text = await response.text();
      console.log('Raw response:', text);

      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error('Failed to parse JSON:', err);
        setSubmitStatus('error');
        return;
      }

      if (result.result === 'success') {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobileno: '',
          memberType: '',
          shopname: '',
          officeaddress: '',
          pan: '',
          gst: '',
          youraddress: '',
          city: '',
          pincode: '',
          state: '',
          district: '',
          service: '',
        });
      } else {
        console.error('Submission failed:', result.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  };
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();


  return (
    <>
    <Header></Header>
    <div className="registration-container">
      <Card className="registration-card">
        <CardHeader className="registration-header">
          <div className="header-icon">
            <User className="icon" />
          </div>
          <CardTitle className="header-title">Enquiry Form</CardTitle>
          <CardDescription className="header-description">
            Join us today and get started with your journey
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="name-fields">
              <div className="field-group">
                <Label htmlFor="firstName" className="field-label">
                  First Name
                </Label>
                <div className="input-wrapper">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    required
                    onChange={handleChange}
                    className={"form-input"}
                    
                  />
                </div>
              
              </div>
              
              <div className="field-group">
                <Label htmlFor="lastName" className="field-label">
                  Last Name
                </Label>
                <div className="input-wrapper">
                  <Input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                     onChange={handleChange}
                    className={`form-input`}
                    
                  />
                </div>
              </div>

              <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Email Address
              </Label>
              <div className="input-wrapper-with-icon">
                <Mail className="input-icon" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input with-icon `}
                  required
                />
              </div>
             
            </div>

                        <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Mobile Number
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="mobileno"
                  type="text"
                  name="mobileno"
                  value={formData.mobileno}
                   onChange={handleChange}
                  className={`form-input with-icon`}
                  required
                />
              </div>
              
            </div>
                        <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Member Type
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <select className="field-label form-input" 
                name="memberType"
                value={formData.memberType}
                onChange={handleChange}>
                  <option value="Distributer">
                    Distributer
                  </option>
                   <option value="MasterDistributer">
                    Master Distributer
                  </option>
                   <option value="Retailer">
                    Retailer
                  </option>
                </select>
              </div>
              
            </div>

             <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Shop Name
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="shopname"
                  type="text"
                  name="shopname"
                  value={formData.shopname}
                   onChange={handleChange}
                  className={`form-input with-icon`}
                 
                />
              </div>
              
            </div>

             <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Office Address
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="officeaddress"
                  type="text"
                  name="officeaddress"
                  value={formData.officeaddress}
                   onChange={handleChange}
                  className={`form-input with-icon`}
                  
                />
              </div>
              
            </div>

              <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Pan Number
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="pan"
                  type="text"
                  name="pan"
                  value={formData.pan}
                   onChange={handleChange}
                  className={`form-input with-icon`}
                  placeholder="Enter Your PAN Number"
                />
              </div>
             
            </div>

            <div className="field-group">
              <Label htmlFor="email" className="field-label">
                GST Number
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="gst"
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  className={`form-input with-icon`}
                  placeholder="Enter Your GST Number"
                />
              </div>
              
            </div>

               <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Your Address
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="youraddress"
                  type="text"
                  name="youraddress"
                  value={formData.youraddress}
                   onChange={handleChange}
                  className={`form-input with-icon`}
                  placeholder="Enter Your Address"
                />
              </div>
      
            </div>

               <div className="field-group">
              <Label htmlFor="email" className="field-label">
                City
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`form-input with-icon ${errors.city ? "error" : ""}`}
                  placeholder="Enter Your City"
                />
              </div>
      
            </div>
               <div className="field-group">
              <Label htmlFor="email" className="field-label">
                PinCode
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="pincode"
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`form-input with-icon `}
                  placeholder="Enter Your PinCode"
                />
              </div>
            
            </div>
               <div className="field-group">
              <Label htmlFor="email" className="field-label">
                State
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state}
                   onChange={handleChange}
                  className={`form-input with-icon`}
                  placeholder="Enter Your State"
                />
              </div>
             
            </div>
               <div className="field-group">
              <Label htmlFor="email" className="field-label">
                District
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <Input
                  id="district"
                  type="text"
                  name="district"
                  value={formData.district}
                 onChange={handleChange}
                  className={`form-input with-icon`}
                  placeholder="Entet Your District"
                />
              </div>
             
            </div>
 <div className="field-group">
              <Label htmlFor="email" className="field-label">
                Service
              </Label>
              <div className="input-wrapper-with-icon">
                {/* <Phone className="input-icon" /> */}
                <select className="field-label form-input"  name="service"
                                  value={formData.service}
                                  onChange={handleChange}>
                  <option value="soundbox">
                    Sound Box Solution
                  </option>
                   <option value="upicollection">
                    UPI Collection
                  </option>
                  <option value="upiintent">
                    UPI Intent Solution
                  </option>
                   <option value="staticqr">
                   Static QR Solution
                  </option>
                   <option value="dynamicqr">
                   Dynamic QR Solution
                  </option>
                   <option value="qrstandee">
                    QR Standee
                  </option>
                   <option value="posmachine">
                    POS Machine Solution
                  </option>
                   <option value="microatm">
                   Micro ATM Solution
                  </option>
                   <option value="upicollection">
                    UPI Collection Solution
                  </option>
                   <option value="utilityservice">
                   Utility Services
                  </option>
                   <option value="prepaidc">
                    Prepaid Card
                  </option>
                  <option value="financesoftware">
                    Financial & Other Software
                  </option>
                  <option value="recharge">
                    Recharge
                  </option>
                  <option value="billpay">
                    Bill Payment
                  </option>
                  
                </select>
              </div>
              
            </div>
            </div>

            <button
                type="submit"
                className={`btn submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === 'success'
                    ? '✅ Enquiry Form sent successfully! We\'ll get back to you soon.'
                    : '❌ Something went wrong. Please try again.'}
                </div>
              )}
          </form>
        </CardContent>
      </Card>
    </div>
    <Footer></Footer>
    </>
  );
};

export default RegistrationServic;