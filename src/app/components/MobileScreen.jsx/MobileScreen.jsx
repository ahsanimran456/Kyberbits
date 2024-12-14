import Iphone15Pro from "@/components/ui/iphone-15-pro";

export function Iphone15ProDemo({mobileSIze,InnerImageUrl}) {
    console.log(InnerImageUrl);
    
  return (
    <div className="relative">
      <Iphone15Pro
        className={mobileSIze}
        src={InnerImageUrl}
      />
    </div>
  );
}
