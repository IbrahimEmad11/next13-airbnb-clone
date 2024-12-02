'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return ( 
        <div className="px-6 sm:px-8 lg:px-12">
            {children}
        </div>
    );
}
 
export default Container;
