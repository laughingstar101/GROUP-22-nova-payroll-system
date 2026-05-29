-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.Attendance (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  employee_id uuid NOT NULL,
  check_in timestamp with time zone NOT NULL,
  check_out timestamp with time zone,
  date date NOT NULL,
  status text DEFAULT 'PENDING'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  work_duration interval DEFAULT '00:00:00'::interval,
  CONSTRAINT Attendance_pkey PRIMARY KEY (id),
  CONSTRAINT Attendance_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.Employee(id)
);
CREATE TABLE public.Company (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  company_email text NOT NULL,
  company_name text NOT NULL,
  company_id uuid,
  created_at timestamp with time zone DEFAULT now(),
  work_start_time time without time zone DEFAULT '09:00:00'::time without time zone,
  required_hours numeric DEFAULT 9.0,
  CONSTRAINT Company_pkey PRIMARY KEY (id),
  CONSTRAINT Company_company_id_fkey FOREIGN KEY (company_id) REFERENCES auth.users(id)
);
CREATE TABLE public.Employee (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  employee_email text NOT NULL,
  employee_name text NOT NULL,
  type text NOT NULL,
  employee_company uuid,
  created_at timestamp with time zone DEFAULT now(),
  profile_image text,
  CONSTRAINT Employee_pkey PRIMARY KEY (id),
  CONSTRAINT Employee_employee_company_fkey FOREIGN KEY (employee_company) REFERENCES public.Company(id)
);
CREATE TABLE public.Leave (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  employee_id uuid NOT NULL,
  status text NOT NULL DEFAULT '''PENDING''::text'::text,
  leave_type text NOT NULL DEFAULT 'Regular Leave'::text,
  details text,
  CONSTRAINT Leave_pkey PRIMARY KEY (id),
  CONSTRAINT Leave_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.Employee(id)
);
CREATE TABLE public.Leave Type (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  leave_name text NOT NULL,
  description text,
  company_id uuid,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT Leave Type_pkey PRIMARY KEY (id),
  CONSTRAINT Leave Type_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.Company(id)
);