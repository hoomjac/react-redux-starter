import React from 'react'
import { Field, reduxForm } from 'redux-form'

export default {
  create: params => target =>
    reduxForm({
      form: target.name,
      ...params
    })(target),
  createField: config => {
    return (
      <Field
        component={config.component}
        {...config.props}
        validate={config.validate}
      />
    )
  }
}
