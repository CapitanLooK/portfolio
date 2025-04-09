import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Link from 'next/link'

function DownloadBtn() {
  return (
    <Link href='/pdf/cv-alejandro-maure.pdf' download target="_blank" rel="noopener noreferrer" locale={false}>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Descarga mi CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </Link>
  )
}

export default DownloadBtn