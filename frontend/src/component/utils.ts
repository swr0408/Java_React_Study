  // 電話番号のフォーマット
  export const formatPhoneNumber = (phoneNumber: string): string => {
    if (!phoneNumber) return '';

    // 携帯電話番号のフォーマット
    if (phoneNumber.startsWith('090') || phoneNumber.startsWith('080') || phoneNumber.startsWith('070') || phoneNumber.startsWith('050')) {
      return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }

    // 固定電話番号のフォーマット
    return phoneNumber.replace(/(\d{2,4})(\d{2,4})(\d{4})/, '$1-$2-$3');
  };