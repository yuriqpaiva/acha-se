import * as Styled from './styles';
import * as BaseStyles from '../../styles/base-styles';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { objectCategories } from '../../constants/objects-categories';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import { useRef, useState } from 'react';
import ImageInput from '../../components/ImageInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { http } from '../../api/server';

/**
 * @typedef {Object} FormData
 * @property {string} category - The category of the lost item
 * @property {string} email - Contact email of the person
 * @property {string} brand - The brand of the lost item
 * @property {string} color - The color of the lost item
 * @property {string} details - Additional details about the lost item
 * @property {File} [image] - Optional image of the lost item
 * @property {string} location - The location where the item was lost
 * @property {Date} lostTime - The date and time when the item was lost
 */

// Define validation schema
const schema = yup
  .object({
    category: yup.string().required('Selecione uma categoria'),
    email: yup
      .string()
      .required('Informe seu e-mail para contato')
      .email('Informe um e-mail válido'),
    brand: yup.string().required('Informe a marca do item'),
    color: yup.string().required('Informe a cor do item'),
    details: yup
      .string()
      .required('Forneça detalhes sobre o item')
      .min(10, 'Forneça pelo menos 10 caracteres de descrição'),
    location: yup.string().required('Informe o local onde o item foi perdido'),
    lostTime: yup
      .date()
      .required('Informe a data e hora aproximada da perda')
      .typeError('Data inválida'),
    image: yup
      .mixed()
      .test('fileSize', 'O arquivo deve ter no máximo 5MB', (value) => {
        if (!value) return true; // Optional file
        return value && value.size <= 5000000;
      })
      .test('fileType', 'Somente imagens são permitidas', (value) => {
        if (!value) return true; // Optional file
        return (
          value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
        );
      }),
  })
  .required();

/**
 * ReportLostItem component for submitting lost item reports
 * @returns {JSX.Element} The ReportLostItem form component
 */
const ReportLostItem = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: '',
      email: '',
      brand: '',
      color: '',
      details: '',
      location: '',
      lostTime: '',
    },
  });

  /**
   * Handles form submission
   * @param {FormData} data - The form data to submit
   */
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('category', data.category);
      formData.append('email', data.email);
      formData.append('brand', data.brand);
      formData.append('color', data.color);
      formData.append('details', data.details);
      formData.append('location', data.location);
      formData.append('lostTime', data.lostTime);
      if (file) {
        formData.append('file', file);
      }

      await http.post('/report-lost-item', formData);

      toast(
        '✅ Formulário enviado. \n\n Entraremos em contato caso encontrarmos algo relacionado aos detalhes fornecidos.',
        { duration: 6000 },
      );
      reset();
      setFile(null);
    } catch (error) {
      toast.error('Erro ao enviar formulário. Tente novamente mais tarde.', {
        duration: 6000,
      });
    }
  };

  /**
   * Handles file input changes
   * @param {File|null} newFile - The new file selected or null if cleared
   */
  const handleFileChange = (newFile) => {
    setFile(newFile);
    setValue('image', newFile || undefined);
  };

  return (
    <Styled.Container>
      <BaseStyles.Title>Reportar item perdido</BaseStyles.Title>
      <p>Preencha o formulário abaixo para reportar um item perdido.</p>

      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <ImageInput
          file={file}
          fileInputRef={fileInputRef}
          setFile={handleFileChange}
        />

        <Input
          placeholder="E-mail para contato"
          type="email"
          {...register('email')}
          error={errors.email}
        />

        <Select
          defaultValue=""
          placeholder="Tipo"
          options={objectCategories.map((category) => ({
            value: category.key,
            label: category.name,
          }))}
          {...register('category')}
          error={errors.category}
        />

        <Input
          placeholder="Marca"
          type="text"
          {...register('brand')}
          error={errors.brand}
        />

        <Input
          placeholder="Cor"
          type="text"
          {...register('color')}
          error={errors.color}
        />

        <Input
          placeholder="Local onde foi perdido"
          type="text"
          {...register('location')}
          error={errors.location}
        />

        <Input
          placeholder="Data e hora aproximada"
          type="datetime-local"
          {...register('lostTime')}
          error={errors.lostTime}
        />

        <Textarea
          placeholder="Detalhes adicionais do item"
          {...register('details')}
          error={errors.details}
        />

        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Reportar item perdido
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default ReportLostItem;
