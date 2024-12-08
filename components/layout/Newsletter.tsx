import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MailIcon } from "@heroicons/react/outline";

export function Newsletter() {
  return (
    <section className="bg-black text-white py-11 mx-[115px] rounded-[20px]">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="flex-1 ml-[60px]">
          <h2 className="text-4xl font-bold">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
        </div>

        
        <div className="flex flex-col items-start gap-4 max-w-lg mr-[60px]">
          <div className="relative w-[300px]">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-black px-4 py-3 rounded-lg w-full pl-12"
            />
           
            <MailIcon className="absolute left-4 top-5 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
          <Button
            variant="secondary"
            className="bg-white text-black px-6 py-3 rounded-lg w-[300px]"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div> 
    </section>
  );
}
