import { React ,useState } from 'react'
import { MultiStepForm, Step } from 'react-multi-form';


export const Forms = () => {
  const [page,setPage] = useState(1)
  const [bill,setBill] = useState(1)

  const goNext = () => {
    setPage(page => page+1)
  }
  const goBack = () => {
    setPage(page => page-1)
  }
  const handleChange = (e) => {
    setBill(e.target.value)
  }


  const Form1 = () => {
    return (
      <div className='d-flex flex-column justify-content-evenly'>
        <h5 className="card-title">How much was was your most recent monthly electric bill?</h5>
        <div className='pt-5'>
          <div className="d-flex justify-content-between">
            <p>Your monthly electric bill</p>
            <p className='text-primary'>$ { bill}</p>
          </div>
          <input type="range" className='w-100 ' min={1} max={1000} value={bill}  onChange={(e) => handleChange(e)}/>
        </div>
      </div>
    )
  }
  const Form2 = () => {
    return (
      <div className='d-flex flex-column justify-content-evenly'>
        <h5 className="card-title">What type of solar system do you want to consider?</h5>
        <div className=''>
          <div className="form-check border py-3 my-3">
            <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
            <label className="form-check-label" for="flexRadioDefault1">
              Solar and Battery Storage
            </label>
          </div>
          <div className="form-check border py-3">
            <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" for="flexRadioDefault2">
              Solar Only
            </label>
          </div>
        </div>
      </div>
    )
  }

  const Form3 = () => {
    return (
      <div>Form 3</div>
    )
  }

  return (
    <div className='container py-5'>
      <div class="card position-absolute top-50 start-50 translate-middle text-center w-25 h-50">
          <div class="card-body d-flex flex-column justify-content-between">
            <MultiStepForm activeStep={page}>
                <Step >
                  <Form1/>
                </Step>
                <Step >
                  <Form2/>
                </Step>
                <Step >
                  <Form3/>
                </Step>
            </MultiStepForm>
            <div className='btns pt-3 '>
              {page > 1 && <button type="button" class="btn btn-outline-secondary me-2" onClick={goBack}>Previous</button>}
              {page < 3 && <button type="button" class="btn btn-primary me-2" onClick={goNext}>Next</button>}
              {page === 3 && <a href='/' type="button" class="btn btn-primary me-2">Submit</a>}
            </div>
          </div>
      </div>
    </div>
  )
}

