export function maskPhone(value: string) {
    //return value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
  }