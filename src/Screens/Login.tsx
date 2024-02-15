import { LoginFormType } from "@/Dtos";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export const Login: React.FC = () => {
  const form = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[100vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <h1 className="font-semibold text-slate-700">Bem-vindo ao <strong className="text-blue-600">CloudJuris!</strong></h1>
          </CardTitle>
          <CardDescription>Faça login para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <FormField 
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email de acesso:</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: guilherme@gmail.com" type="email" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Senha de acesso:</FormLabel>
                    <FormControl>
                      <Input placeholder="***************" type="password" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-full mt-4 font-semibold">
                Entrar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}